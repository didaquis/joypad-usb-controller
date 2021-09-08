export const isAppRunningInDeviceConfigurationMode = (): boolean => {
	return process.env.DEVICE_CONFIGURATION_MODE === 'yes';
};

export const isDetectionDeviceModeStepOne = (): boolean => {
	return process.env.DEVICE_CONFIGURATION_MODE_STEP === 'one';
};

export const isDetectionDeviceModeStepTwo = (): boolean => {
	return process.env.DEVICE_CONFIGURATION_MODE_STEP === 'two';
};
