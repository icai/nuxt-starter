import {
  defineNuxtModule,
  logger,
} from '@nuxt/kit'
import { spawnSync } from 'child_process'

export interface ModuleOptions {
  entryFile: string;
  noImplicitAdditionalProperties: boolean;
  controllerPathGlobs?: string[];
  multerOpts?: any;
  rootSecurity?: any;
  routeGenerator?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-tsoa',
    configKey: 'nuxtTsoa',
  },
  async setup(options, nuxt) {
    const spawnSyncCall = async () => {
      logger.info('Generating TSOA routes')
      const generateSpecCommand = 'npx tsoa spec';
      const generateRoutesCommand = 'npx tsoa routes';

      // Run TSOA commands to generate spec and routes
      const generateSpecResult = spawnSync(generateSpecCommand, { shell: true });
      if (generateSpecResult.error) {
        logger.error('Error generating TSOA spec:', generateSpecResult.error);
      } else {
        logger.info('TSOA spec generated successfully.');
      }

      const generateRoutesResult = spawnSync(generateRoutesCommand, { shell: true });
      if (generateRoutesResult.error) {
        logger.error('Error generating TSOA routes:', generateRoutesResult.error);
      } else {
        logger.info('TSOA routes generated successfully.');
      }
    }
    // add dev mode watch server
    nuxt.hook('nitro:build:before', async () => {
      await spawnSyncCall()
    })
  }
})
