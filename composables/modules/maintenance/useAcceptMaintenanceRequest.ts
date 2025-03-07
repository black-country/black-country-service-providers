import { maintenance_api } from '@/api_factory/modules/maintenance'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

const payload = ref({
    expectedStartDate:  "2025-02-06",
     expectedStartTime: "10 AM"
})

export const useAcceptMaintenenceRequest = () => {
	const acceptMaintenenceRequest = async (id: any) => {
		loading.value = true

		const res = await maintenance_api.$_accept_maintenance_request(id, payload.value) as any

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: "Maintenence Request Accepted Successfully",
                toastType: "success",
                duration: 3000
              });
              window.location.reload();
        } else {
            showToast({
                title: "Error",
                message: res.data.error,
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
	}

    const setPayload = (data: any) => {
        payload.value.expectedStartDate =  data.expectedStartDate
        payload.value.expectedStartTime =  data.expectedStartTime
    }

	return { acceptMaintenenceRequest, loading, setPayload, payload }
}
