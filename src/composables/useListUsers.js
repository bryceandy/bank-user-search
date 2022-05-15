import { onMounted, reactive, watch } from 'vue'
import sourceData from '@/data.json'

export default function useListUsers (bankId) {
  const users = reactive([])
  const getBankUsers = () => {
    const bank = sourceData.banks.find(bank => bank.id === bankId.value)
    bank?.users.forEach(userId => {
      const user = sourceData.users.find(userObject => userObject.id === userId)
      if (user !== undefined) users.push(user)
    })
  }

  onMounted(getBankUsers)
  watch(bankId, () => {
    users.splice(0, users.length)
    getBankUsers()
  })

  return { users }
}
