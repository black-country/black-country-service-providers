<template>
  <!-- component -->
  <MessagingView>
    <div>
      <div class="w-full h-32" style="background-color: white"></div>
      <div class="mt-[-128px]">
        <div class="h-screen">
          <!-- Mobile View (Original Code) -->
          <div class="lg:hidden h-full w-full">

          </div>
          <!-- Desktop View (Original Code) -->
          <section class="hidden lg:flex h-full rounded">
            <!-- Left sidebar -->
            <div class="w-[400px] flex flex-col border-r border-gray-25">
              <!-- Search and Filter Header -->
              <div class="p-4 border-b border-gray-100">
                <div class="flex items-center space-x-4">
                  <div class="relative flex-1">
                    <input type="text" placeholder="Search" v-model="searchTerm"
                      class="w-full p-3 pl-12 bg-[#EAEAEA] text-sm rounded-lg text-gray-700 outline-none" />
                    <svg class="absolute top-3 left-5" width="16" height="17" viewBox="0 0 16 17" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.668 12.166L14.668 15.166" stroke="#667185" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z"
                        stroke="#667185" stroke-width="1.5" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div class="relative">
                    <button @click="toggleFilterModal" class="p-2">
                      <svg class="cursor-pointer" width="44" height="44" viewBox="0 0 44 44" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect width="44" height="44" rx="8" fill="#EAEAEA" />
                        <path d="M21.9941 22H22.0016" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M21.9863 27H21.9938" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M22 17H22.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </button>

                    <div v-if="showFilterModal"
                      class="absolute right-0 mt-2 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                      <ul>
                        <li @click="filterChats('all')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100">
                          All
                        </li>
                        <li @click="filterChats('read')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100">
                          Read
                        </li>
                        <li @click="filterChats('unread')"
                          class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer hover:bg-gray-100">
                          Unread
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- <button @click="toggleDropdown" class="bg-[#EAEAEA] p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8333 3.33398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M9.16667 15.834H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.5001 15.834H14.1667" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.5001 9.58398H9.16675" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M17.4999 3.33398H15.8333" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path d="M4.16667 9.58398H2.5" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                      <path
                        d="M12.0833 1.66602C12.4715 1.66602 12.6657 1.66602 12.8188 1.72945C13.023 1.81402 13.1853 1.97626 13.2698 2.18045C13.3333 2.33359 13.3333 2.52773 13.3333 2.91602V3.74935C13.3333 4.13763 13.3333 4.33177 13.2698 4.48492C13.1853 4.68911 13.023 4.85134 12.8188 4.93592C12.6657 4.99935 12.4715 4.99935 12.0833 4.99935C11.695 4.99935 11.5008 4.99935 11.3477 4.93592C11.1435 4.85134 10.9813 4.68911 10.8967 4.48492C10.8333 4.33177 10.8333 4.13763 10.8333 3.74935V2.91602C10.8333 2.52773 10.8333 2.33359 10.8967 2.18045C10.9813 1.97626 11.1435 1.81402 11.3477 1.72945C11.5008 1.66602 11.695 1.66602 12.0833 1.66602Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M10.4167 14.166C10.805 14.166 10.9992 14.166 11.1523 14.2294C11.3565 14.314 11.5187 14.4763 11.6033 14.6804C11.6667 14.8336 11.6667 15.0278 11.6667 15.416V16.2493C11.6667 16.6376 11.6667 16.8318 11.6033 16.9849C11.5187 17.1891 11.3565 17.3513 11.1523 17.4359C10.9992 17.4993 10.805 17.4993 10.4167 17.4993C10.0285 17.4993 9.83433 17.4993 9.68116 17.4359C9.477 17.3513 9.31475 17.1891 9.23017 16.9849C9.16675 16.8318 9.16675 16.6376 9.16675 16.2493V15.416C9.16675 15.0278 9.16675 14.8336 9.23017 14.6804C9.31475 14.4763 9.477 14.314 9.68116 14.2294C9.83433 14.166 10.0285 14.166 10.4167 14.166Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path
                        d="M7.91675 7.91602C8.30503 7.91602 8.49917 7.91602 8.65233 7.97945C8.8565 8.06402 9.01875 8.22626 9.10333 8.43043C9.16675 8.5836 9.16675 8.77777 9.16675 9.16602V9.99935C9.16675 10.3876 9.16675 10.5818 9.10333 10.7349C9.01875 10.9391 8.8565 11.1013 8.65233 11.1859C8.49917 11.2493 8.30503 11.2493 7.91675 11.2493C7.52846 11.2493 7.33432 11.2493 7.18118 11.1859C6.97699 11.1013 6.81476 10.9391 6.73018 10.7349C6.66675 10.5818 6.66675 10.3876 6.66675 9.99935V9.16602C6.66675 8.77777 6.66675 8.5836 6.73018 8.43043C6.81476 8.22626 6.97699 8.06402 7.18118 7.97945C7.33432 7.91602 7.52846 7.91602 7.91675 7.91602Z"
                        stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>

                  <div v-if="showDropdown" class="fixed inset-0 z-50" @click="toggleDropdown">

                  <div
                    class="absolute left-[170px] mt-4 top-10 w-44 bg-white rounded-lg border-[0.5px] border-gray-25 z-20 shadow">
                    <ul>
                      <li
                        class="flex items-center justify-between text-sm px-4 py-2 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                        Read
                      </li>
                      <li
                        class="flex items-center justify-between text-sm px-4 py-1 mb-2 border-b text-[#1D2739] last:border-b-0 border-gray-100 cursor-pointer ">
                        Unread
                      </li>
                    </ul>
                  </div>
                  </div> -->
                </div>
              </div>

              <!-- Chat List -->
              <div class="flex-1 overflow-y-auto">
                <div v-if="!loadingActiveChats && filteredChats.length" class="divide-y divide-gray-100">
                  <ChatUserList class="px-3 flex items-center bg-grey-light cursor-pointer"
                    :loading="loadingActiveChats" :users="filteredChats" @selectUser="selectUser" />
                  <!-- <div
                    v-for="chat in activeChatsList"
                    :key="chat.id"
                    @click="selectUser(chat)"
                    class="flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    :class="{'bg-gray-50': selectedUser?.id === chat.id}"
                  >
                    <div class="relative">
                      <img
                        :src="chat.participant?.avatar || '/placeholder-avatar.png'"
                        class="w-12 h-12 rounded-full object-cover"
                        :alt="chat.participant?.name"
                      />
                      <div
                        v-if="chat.unread"
                        class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"
                      ></div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex justify-between items-start">
                        <h3 class="font-medium text-sm truncate">{{ chat.participant?.name }}</h3>
                        <span class="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {{ formatDate(chat.lastMessage?.createdAt) }}
                        </span>
                      </div>
                      <p class="text-sm text-gray-500 truncate">
                        {{ chat.lastMessage?.content }}
                      </p>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- Right Content -->
            <div class="flex-1 flex flex-col">
              <!-- Chat Header -->
              <ChatHeader :selectedUser="selectedUser || roomChatsList" :isConnected="isConnected" />
              <!-- <div class="flex items-center space-x-4 p-4 bg-white border-b border-gray-100">
                <div class="flex items-center space-x-3">
                  <img
                    :src="selectedUser?.participant?.avatar || '/placeholder-avatar.png'"
                    class="w-10 h-10 rounded-full object-cover"
                    :alt="selectedUser?.participant?.name"
                  />
                  <div>
                    <h2 class="font-medium text-sm">{{ selectedUser?.participant?.name }}</h2>
                    <p class="text-xs text-gray-500">{{ selectedUser?.participant?.status || 'Online' }}</p>
                  </div>
                </div>
              </div> -->

              <!-- Chat Messages -->
              <div class="flex-1 overflow-y-auto p-4">
                <ChatWindow class="z-10" :roomChats="roomChatsList" :messages="messages" :selectedUser="selectedUser" />
              </div>

              <!-- Message Input -->
              <div class="bg-white">
                <ChatMessageInput v-model="newMessage" :isConnected="isConnected"
                  :isSending="messageStatus === 'sending'" @sendMessage="sendMessageToUser" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </MessagingView>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useFetchTenant } from '@/composables/modules/tenant/fetch';
import { useRouter, useRoute } from 'vue-router';
import MessagingView from "@/layouts/MessagingView.vue";
import { useGetActiveChats } from "@/composables/modules/messages/fetchActiveChats";
import { useGetRoomChats } from "@/composables/modules/messages/fetchRoomMessages";
import { useWebSocket } from "@/composables/modules/messages/sockets";

// Composables
const { loadingActiveChats, activeChatsList, getActiveChats } = useGetActiveChats();
const { getRoomChats, loadingRoomChats, roomChatsList } = useGetRoomChats();
const { loading, tenant } = useFetchTenant();
const {
  messages,
  newMessage,
  isConnected,
  sendMessage,
  markMessageAsRead
} = useWebSocket();

definePageMeta({
  middleware: 'auth'
});

const router = useRouter();
const route = useRoute();
const selectedUser = ref(null);
const messageStatus = ref('idle');

const showFilterModal = ref(false)

const filterStatus = ref('all')

const toggleFilterModal = () => {
  showFilterModal.value = !showFilterModal.value
}

const filterChats = (status: 'all' | 'read' | 'unread') => {
  filterStatus.value = status
  showFilterModal.value = false
}

// Watch for selected user changes
watch(selectedUser, async (newVal: any) => {
  if (newVal?.id) {
    try {
      await getRoomChats(newVal.id);
    } catch (error) {
      console.error('Failed to fetch room chats:', error);
    }
  }
});

// Watch for new messages to scroll to bottom
watch(messages, (newMessages) => {
  if (newMessages.length > 0) {
    scrollToBottom();
  }
}, { deep: true });

// Message handling
const sendMessageToUser = async (content: string) => {
  if (!selectedUser.value?.participant?.id || !isConnected.value) {
    console.error(
      "Cannot send message: No recipient selected or not connected"
    );
    return;
  }

  const userId = selectedUser?.value?.participant?.id || route?.query?.userId;


  if (!userId || !isConnected.value) {
    console.error(
      "Cannot send message: No recipient selected or not connected"
    );
    return;
  }

  messageStatus.value = "sending";

  try {
    const socketPayload = {
      content,
      recipientId: selectedUser?.value?.participant?.id,
      recipientType: selectedUser?.value?.participant?.role,
      messageType: "private",
      room: selectedUser.value.id, // Include room ID if needed
    };

    await sendMessage(socketPayload);
    messageStatus.value = "sent";
    newMessage.value = ""; // Clear input after successful send
  } catch (error) {
    console.error("Failed to send message:", error);
    messageStatus.value = "error";
  }
  getActiveChats();
  console.log('first')
};

// User selection
// const selectUser = (user: any) => {
//   selectedUser.value = user;
//   // Optionally update URL
//   router.push({ query: { userId: user.id } });
// };

const selectUser = async (user: any) => {
  console.log(user, 'selected user');
  selectedUser.value = user;

  // Mark as read
  if (user?.lastMessage?.roomId && user?.lastMessage?.recipientId) {
    await markMessageAsRead(user.lastMessage.roomId, user.lastMessage.recipientId);
  }

  // Wait for the DOM to update before continuing
  await nextTick();

  await getRoomChats(selectedUser.value?.id);
  router.push({ query: { userId: user.id } });
};

watch(activeChatsList, (newChats) => {
  if (selectedUser.value) {
    const selectedChat = newChats.find(chat => chat.id === selectedUser.value.id);
    if (selectedChat) {
      selectedChat.unreadMessagesCount = 0;
    }
  }
});

// Scroll handling
const scrollToBottom = () => {
  const chatWindow = document.querySelector('.custom-scrollbar');
  if (chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
};

// Event handling
const { $emitter } = useNuxtApp();

onMounted(() => {
  // Handle URL parameters
  const userId = route.query.userId;
  console.log(userId, 'user here');
  if (userId && activeChatsList.value) {
    const user = activeChatsList.value.find(u => u.id === userId);
    if (user) {
      selectUser(user);
    }
  }

  // // Set up event listeners
  // $emitter.on('customEvent', async (payload: any) => {
  //   if (payload.data) {
  //     await getRoomChats(payload.data);
  //     scrollToBottom();
  //   }
  // });
});

onUnmounted(() => {
  // Clean up event listeners
  $emitter.off('customEvent');
});

// State for dropdown visibility
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}


const showChatDetail = ref(false);

const openChatDetail = (user: any) => {
  selectedUser.value = user;
  showChatDetail.value = true;
};

// Add this to your existing script
function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}



// Add this new ref for the search term
const searchTerm = ref('');

// Add this computed property to filter the chats
// const filteredChats = computed(() => {
//   if (!searchTerm.value) return activeChatsList.value;

//   return activeChatsList.value.filter(chat => 
//     chat.participant?.firstName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
//     chat.participant?.lastName.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
//     chat.lastMessage?.content.toLowerCase().includes(searchTerm.value.toLowerCase())
//   );
// });

// const filteredChats = computed(() => {
//   let filtered = activeChatsList.value;

//   // Filter chats by search term if provided
//   if (searchTerm.value) {
//     const lowerSearchTerm = searchTerm.value.toLowerCase();
//     filtered = filtered.filter(chat => {
//       return (
//         chat.participant?.firstName.toLowerCase().includes(lowerSearchTerm) ||
//         chat.participant?.lastName.toLowerCase().includes(lowerSearchTerm) ||
//         chat.lastMessage?.content.toLowerCase().includes(lowerSearchTerm)
//       );
//     });
//   }

//   // // Filter chats by read/unread status if not 'all'
//   // if (filterStatus.value !== 'all') {
//   //   filtered = filtered.filter(chat =>
//   //     filterStatus.value === 'read' ? !chat.unread : chat.unread
//   //   );
//   // }
//   if (filterStatus.value !== 'all') {
//   filtered = filtered.filter(chat =>
//     filterStatus.value === 'read' ? chat.readAt !== null : chat.readAt === null
//   );
// }

//   return filtered;
// });

const filteredChats = computed(() => {
  let filtered = activeChatsList.value;

  // Filter chats by search term if provided
  if (searchTerm.value) {
    const lowerSearchTerm = searchTerm.value.toLowerCase();
    filtered = filtered.filter(chat => {
      return (
        chat.participant?.firstName.toLowerCase().includes(lowerSearchTerm) ||
        chat.participant?.lastName.toLowerCase().includes(lowerSearchTerm) ||
        chat.lastMessage?.content.toLowerCase().includes(lowerSearchTerm) ||
        chat.participant?.email.toLowerCase().includes(lowerSearchTerm)
      );
    });
  }

  if (filterStatus.value !== 'all') {
    filtered = filtered.filter(chat =>
      filterStatus.value === 'read' ? chat?.unreadMessagesCount <= 0 : chat?.unreadMessagesCount > 0
    );
  }

  return filtered;
});



</script>

<style>
.flip-enter-active,
.flip-leave-active {
  transition: transform 0.3s ease-out;
}

.flip-enter-from {
  transform: translateX(100%);
}

.flip-leave-to {
  transform: translateX(-100%);
}

.flip-enter-to,
.flip-leave-from {
  transform: translateX(0);
}

/* Add these styles for better scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

/* Add these styles for better scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

/* .overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 3px;
} */


/* Add these styles to prevent horizontal overflow */
.overflow-x-hidden {
  overflow-x: hidden;
}

/* Ensure text truncation works properly */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Add smooth scrolling */
.overflow-y-auto {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}
</style>
