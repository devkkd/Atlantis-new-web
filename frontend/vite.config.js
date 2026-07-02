{/*import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    javascriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 1,
      debugProtection: true,
      debugProtectionInterval: true,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      numbersToExpressions: true,
      renameGlobals: true,
      selfDefending: true,
      simplify: true,
      splitStrings: true,
      splitStringsChunkLength: 5,
      stringArray: true,
      stringArrayCallsTransform: true,
      stringArrayCallsTransformThreshold: 1,
      stringArrayEncoding: ['rc4'],
      stringArrayIndexShift: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 5,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 5,
      stringArrayWrappersType: 'function',
      stringArrayThreshold: 1,
      transformObjectKeys: true,
      unicodeEscapeSequence: true,
    }, ['excluded-file-name.js']) // Optional: exclude specific files
  ],
});
*/}
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import javascriptObfuscator from "vite-plugin-javascript-obfuscator";

export default defineConfig(({ mode }) => ({

  plugins: [

    react(),

    // Sirf production build me obfuscation
    ...(mode === "production"
      ? [
          javascriptObfuscator(
            {
              compact: true,
              controlFlowFlattening: true,
              deadCodeInjection: true,
              debugProtection: true,
              disableConsoleOutput: true,
              selfDefending: true,
            },
            []
          ),
        ]
      : []),

  ],

}));