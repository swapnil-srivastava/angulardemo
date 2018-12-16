import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
import * as express from 'express';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

const document = fs.readFileSync(__dirname + '/dist/browser/index.html', 'utf-8');
const AppServerModuleNgFactory =  require('./dist/server/main').AppServerModuleNgFactory;
const LAZY_MODULE_MAP =  require('./dist/server/main').LAZY_MODULE_MAP;

const app = express();

// DI so that we can get lazy-loading to work differently (since we need it to just instantly render it)

app.get('**', (req, res) => {
  const url = req.path;
  renderModuleFactory(AppServerModuleNgFactory,
    {
      document: document,
      url: url,
      extraProviders: [
        provideModuleMap(LAZY_MODULE_MAP)
      ]
    })
    .then(html => {
      res.set('Cache-Control', 'public max-age=600 s-maxage=1200');
      res.send(html);
    }).catch(err => console.log('errrrrr from render module factory', err));
});

export let ssrapp = functions.https.onRequest(app);
