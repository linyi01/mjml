var mjml = require('./lib/index')

console.log(mjml.mjml2html(`
<mjml>
  <mj-body>
    <mj-container>
      <mj-section background-color="#7F8385">
          <mj-column>
            <mj-button background-color="transparent"
                       border="2px solid white"
                       color="white"
                       height="40px"
                       text-transform="uppercase"
                       inner-padding="10px"
                       href="http://mjml.io" border-radius="10px"
                       align="center">
              Check out promotions !
            </mj-button>
            <mj-text>ruhzeruzhrijw</mj-text>
          </mj-column>
      </mj-section>
    </mj-container>
  </mj-body>
</mjml>`, { beautify: true }))
