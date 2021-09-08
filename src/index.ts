import {
	isAppRunningInDetectionDeviceMode,
	isDetectionDeviceModeStepOne,
	isDetectionDeviceModeStepTwo,
} from './infrastructure/environment';
import { detectDevice } from './deviceDetectionAndMonitoring/detectDevice';
import { monitorDevice } from './deviceDetectionAndMonitoring/monitorDevice';

if (isAppRunningInDetectionDeviceMode()) {
	if (isDetectionDeviceModeStepOne()) {
		detectDevice();
	}

	if (isDetectionDeviceModeStepTwo()) {
		monitorDevice();
	}
}
