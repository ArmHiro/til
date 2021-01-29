const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) =>
  phase === PHASE_DEVELOPMENT_SERVER ?
    {}
    :
    {
      basePath: '/til',
    }
