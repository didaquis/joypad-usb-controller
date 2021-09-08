import {
	isAppRunningInDetectionDeviceMode,
	isDetectionDeviceModeStepOne,
	isDetectionDeviceModeStepTwo,
} from './infrastructure/environment';
import { detectDevice } from './deviceConfigurator/detectDevice';
import { monitorDevice } from './deviceConfigurator/monitorDevice';

if (isAppRunningInDetectionDeviceMode()) {
	if (isDetectionDeviceModeStepOne()) {
		detectDevice();
	}

	if (isDetectionDeviceModeStepTwo()) {
		monitorDevice();
	}
}
