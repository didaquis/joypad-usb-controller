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
		device.open();
		//if (isDeviceOpen) {
		const interfaces = device.interfaces;
		console.log('interfaces: ', interfaces);
		//}

		console.log('');
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
