/*
 Used to import the indexes when in DEV mode. In production
 the indexes are retrieved from the repo. This is done to prevent 
 the indexes from being part of the build as the map.json 
 file is large and upsets the build. 
*/

import cfg from '../../../indexes/latest/cfg.json';
import ctx from '../../../indexes/latest/ctx.json';
import map from '../../../indexes/latest/map.json';
import reg from '../../../indexes/latest/reg.json';

export { cfg, ctx, map, reg };
