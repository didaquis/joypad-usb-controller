export const isAppRunningInDetectionDeviceMode = (): boolean => {
	return process.env.DETECTION_DEVICE_MODE === 'yes';
};

export const isDetectionDeviceModeStepOne = (): boolean => {
	return process.env.DETECTION_DEVICE_MODE_STEP === 'one';
};

export const isDetectionDeviceModeStepTwo = (): boolean => {
	return process.env.DETECTION_DEVICE_MODE_STEP === 'two';
};
