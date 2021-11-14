import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewSDKClient {

  readyPromise: Promise<any> = new Promise((resolve) => {
    // @ts-ignore
    if (window.AdobeDC) {
      // @ts-ignore
      resolve();
    } else {
      /* Wait for Adobe Document Services PDF Embed API to be ready */
      document.addEventListener('adobe_dc_view_sdk.ready', () => {
        // @ts-ignore
        resolve();
      });
    }
  });
  adobeDCView: any;

  ready() {
    return this.readyPromise;
  }

  previewFile(divId: string, viewerConfig: any) {
    const config: any = {
      /* Pass your registered client id */
      clientId: environment.adobe,
    };
    if (divId) { /* Optional only for Light Box embed mode */
      /* Pass the div id in which PDF should be rendered */
      config.divId = divId;
    }
    /* Initialize the AdobeDC View object */
    // @ts-ignore
    this.adobeDCView = new window.AdobeDC.View(config);

    /* Invoke the file preview API on Adobe DC View object */
    const previewFilePromise = this.adobeDCView.previewFile({
      /* Pass information on how to access the file */
      content: {
        /* Location of file where it is hosted */
        location: {
          url: '/assets/cv_de.pdf',
          /*
          If the file URL requires some additional headers, then it can be passed as follows:-
          headers: [
              {
                  key: '<HEADER_KEY>',
                  value: '<HEADER_VALUE>',
              }
          ]
          */
        },
      },
      /* Pass meta data of file */
      metaData: {
        /* file name */
        fileName: 'cv_de.pdf',
        /* file ID */
        id: '6d07d124-ac85-43b3-a867-36930f502ac6',
      }
    }, viewerConfig);

    return previewFilePromise;
  }

}
