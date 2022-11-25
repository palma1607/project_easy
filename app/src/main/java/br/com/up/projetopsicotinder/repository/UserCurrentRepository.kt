package br.com.up.projetopsicotinder.repository

import android.content.Context


class UserCurrentRepository private constructor() {

    private val userIdKey = "UserId"
    private val userTokenKey = "UserToken"

    companion object{

        private var repository:UserCurrentRepository? = null

        fun instance():UserCurrentRepository{

            return if(repository != null){
                repository!!
            }else{
                repository = UserCurrentRepository()
                repository!!
            }
        }
    }

    fun saveId (context: Context, id: String){
        val editor = context.getSharedPreferences(Context.MODE_PRIVATE).edit()
        editor.putString(userIdKey, id).apply()
    }

    fun getId (context: Context) : String? {
        val sharedPreferences = context.getSharedPreferences(Context.MODE_PRIVATE)
        return sharedPreferences.getString(userIdKey, null)
    }

    fun saveToken (context: Context, token: String){
        val editor = context.getSharedPreferences(Context.MODE_PRIVATE).edit()
        editor.putString(userTokenKey, token).apply()
    }

    fun getToken (context: Context) : String? {
        val sharedPreferences = context.getSharedPreferences(Context.MODE_PRIVATE)
        return sharedPreferences.getString(userTokenKey, null)
    }

    fun deleteId(context: Context){
        val editor = context.getSharedPreferences(Context.MODE_PRIVATE).edit()
        editor.remove(userIdKey).apply()
    }

    fun deleteToken(context: Context){
        val editor = context.getSharedPreferences(Context.MODE_PRIVATE).edit()
        editor.remove(userTokenKey).apply()
    }

}