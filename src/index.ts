import {
	isAppRunningInDeviceConfigurationMode,
	isDetectionDeviceModeStepOne,
	isDetectionDeviceModeStepTwo,
} from './infrastructure/environment';
import { detectDevice } from './deviceConfigurator/detectDevice';
import { monitorDevice } from './deviceConfigurator/monitorDevice';
import { listenDevice } from './listenDevice';

if (isAppRunningInDeviceConfigurationMode()) {
	if (isDetectionDeviceModeStepOne()) {
		detectDevice();
	}

	if (isDetectionDeviceModeStepTwo()) {
		monitorDevice();
	}
}

listenDevice();
