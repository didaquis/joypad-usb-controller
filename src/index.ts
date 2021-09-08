import {
	isAppRunningInDeviceConfigurationMode,
	isDetectionDeviceModeStepOne,
	isDetectionDeviceModeStepTwo,
} from './infrastructure/environment';
import { detectDevice } from './deviceConfigurator/detectDevice';
import { monitorDevice } from './deviceConfigurator/monitorDevice';

if (isAppRunningInDeviceConfigurationMode()) {
	if (isDetectionDeviceModeStepOne()) {
		detectDevice();
	}

	if (isDetectionDeviceModeStepTwo()) {
		monitorDevice();
	}
}
