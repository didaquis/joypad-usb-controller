/* eslint-disable no-console */

import usb from 'usb';

interface TARGET_DEVICE {
	vendorId: number;
	productId: number;
}

/*
 * Set here the values of the device to monitor
 */
const TARGET_DEVICE: TARGET_DEVICE = {
	vendorId: 2341,
	productId: 34918,
};

export const monitorDevice = (): void => {
	console.log(
		`Start to monitor the device with vendor id ${TARGET_DEVICE.vendorId} and product id ${TARGET_DEVICE.productId}`,
	);

	const device = usb.findByIds(TARGET_DEVICE.vendorId, TARGET_DEVICE.productId);

	if (device !== undefined) {
		// ... hay dispositivo conectado
		try {
			device.close();
		} catch (error) {
			console.log('\nError trying to close the device\n', error);
			// Can't close device with a pending request    ===>   ¿¿¿???
		}
		device.open();
		//const allInterfaces = device.interfaces;
		//console.log(allInterfaces);
		/**
		[
			Interface {
				device: Device {
				busNumber: 1,
				deviceAddress: 4,
				deviceDescriptor: [Object],
				portNumbers: [Array],
				interfaces: [Circular *1],
				_configDescriptor: [Object]
				},
				id: 0,
				altSetting: 0,
				descriptor: {
				bLength: 9,
				bDescriptorType: 4,
				bInterfaceNumber: 0,
				bAlternateSetting: 0,
				bNumEndpoints: 1,
				bInterfaceClass: 3,
				bInterfaceSubClass: 0,
				bInterfaceProtocol: 0,
				iInterface: 0,
				extra: <Buffer 09 21 00 01 00 01 22 bc 00>,
				endpoints: [Array]
				},
				interfaceNumber: 0,
				endpoints: [ [InEndpoint] ]
			}
		]
		 */

		const firstInterface = device.interface(0);
		//console.log('firstInterface', firstInterface);

		if (firstInterface && firstInterface.isKernelDriverActive()) {
			firstInterface.detachKernelDriver();
		}
		firstInterface.claim();

		//const allEndpoints = firstInterface.endpoints;
		//console.log(allEndpoints);
		/*
		[
			InEndpoint {
				device: Device {
				busNumber: 1,
				deviceAddress: 4,
				deviceDescriptor: [Object],
				portNumbers: [Array],
				interfaces: [Array],
				_configDescriptor: [Object]
				},
				descriptor: {
				bLength: 7,
				bDescriptorType: 5,
				bEndpointAddress: 129,
				bmAttributes: 3,
				wMaxPacketSize: 7,
				bInterval: 10,
				bRefresh: 0,
				bSynchAddress: 0,
				extra: <Buffer >
				},
				address: 129,
				transferType: 3
			}
		]
		*/

		const inEndpoint = firstInterface.endpoint(129);
		console.log(inEndpoint);
	}

	console.log('\nRunning for 20 seconds. Please press all buttons on your device one at a time\n');

	// escuchar al dispositivo
	// por cada señal distinta que reciba, la almaceno en un array
	// cuando pasen los 20 segundos, le muestro al usuario todos las señales distintas que he captado

	const twentySeconds = 20000;
	setTimeout(function (): void {
		// debo detener el proceso de escucha (cerrando los puertos)
		// debo asegurarme de detener la aplicación por completo
	}, twentySeconds);
};
