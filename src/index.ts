import { ComponentSettings, Manager } from '@managed-components/types'

export default async function (manager: Manager, settings: ComponentSettings) {

  manager.addEventListener('pageview', async event => {
    const { client } = event
    // Not sure if I should get the clients browser date from the client constant
    // or maybe something like client.console.log(new Date())
    // whould have to do some testing.
    // but here is the simple version:
    
    console.log(new Date());
  })
}
