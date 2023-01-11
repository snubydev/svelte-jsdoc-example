import preprocess from 'svelte-preprocess';

const config = {
  preprocess: preprocess(
    {
      aliases: [
        ['$src', './src'],
      ],
    },
  ),
}

export default config;