package br.com.up.projetopsicotinder.repositories

import android.util.Log
import br.com.up.projetopsicotinder.models.Professional
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

class ProfileRepository private  constructor()
{
    private val collectionPath: String = "Perfil"

    companion object
    {
        private var repository: ProfileRepository? = null

        fun instance():ProfileRepository
        {
            return if(repository != null)
            {
                repository!!
            }
            else
            {
                repository = ProfileRepository()
                repository!!
            }
        }
    }

    fun test(callback: (String) -> Unit)
    {
        callback.invoke("Test Callback")
    }

    fun get(id: String, callback: (Professional?) -> Unit)
    {
        Log.d("[Firebase]", "Acessing Firebase Data...")

        val database = Firebase.firestore
        database.collection(collectionPath).document(id).get().
        addOnSuccessListener { document ->
            Log.d("[Firebase]", "Found Firebase Data...")
            if(document != null)
            {
                val profile = Professional()

                profile.name = document.data?.get("name") as String
                profile.lastName = document.data?.get("lastName") as String
                profile.email = document.data?.get("email") as String
                profile.cpf = document.data?.get("cpf") as String
                profile.age = document.data?.get("age") as String
                profile.id_photo = document.data?.get("id_photo") as String
                profile.district = document.data?.get("district") as String
                profile.city = document.data?.get("city") as String
                profile.state = document.data?.get("state") as String
                profile.street = document.data?.get("street") as String
                profile.number = document.data?.get("number") as String
                profile.complement = document.data?.get("complement") as String
                profile.cep = document.data?.get("cep") as String
                profile.userType = document.data?.get("userType") as Int

                profile.availability = document.data?.get("availability") as Int
                profile.remotePreferente = document.data?.get("remotePreferente") as Int

                profile.crp = document.data?.get("crp") as String
                profile.professionalPosture = document.data?.get("crp") as Int
                profile.gender = document.data?.get("gender") as Int
                profile.experienceYears = document.data?.get("experienceYears") as String

                callback.invoke(profile)
            }
            else
            {
                callback.invoke(null)
            }
        }.
        addOnFailureListener {
                exception ->
            Log.d("[Firebase]", "falha: ", exception)
        }
    }
}