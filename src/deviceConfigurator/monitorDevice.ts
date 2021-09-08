/* eslint-disable no-console */

/*
 * Set here the values of the device to monitor
 */
const TARGET_DEVICE: Record<string, string> = {
	vendorId: '2341',
	productId: '34918',
};

export const monitorDevice = (): void => {
	console.log(
		`Start to monitor the device with vendor id ${TARGET_DEVICE.vendorId} and product id ${TARGET_DEVICE.productId}`,
	);

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
