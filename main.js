import { supabase } from './supabaseClient.js'

const registerBtn = document.getElementById('registerBtn')

registerBtn.addEventListener('click', async () => {
  const { data, error } = await supabase.auth.signUp({
    email: 'student@example.com', // سيتم استبدالها بمدخلات المستخدم
    password: 'password123',
  })
  
  if (error) {
    alert('حدث خطأ: ' + error.message)
  } else {
    alert('تم إنشاء حسابك بنجاح! مرحباً بك في ELH')
  }
})
