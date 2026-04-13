import { db } from '../utils/firebase';
import { supabase } from '../utils/supabase';
const chatService = {
  async getChatLog() {
    try {
      const chatLog = await db.collection('chat_log').get();
      return chatLog.docs.map(doc => doc.data());
    } catch (error) {
      console.log(error);
    }
  },
  async sendMessage(message) {
    try {
      const { data, error } = await supabase.from('chat_log').insert({ message });
      if (data) {
        return data[0];
      } else if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
export default chatService;