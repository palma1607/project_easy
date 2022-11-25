package br.com.up.projetopsicotinder.repository

import br.com.up.projetopsicotinder.models.Professional
import br.com.up.projetopsicotinder.models.User
import com.google.firebase.firestore.FirebaseFirestore


class PsychologistRepository private constructor(){

    private val collectionPath = "Psychologist"

    companion object{

        private var repository:PsychologistRepository? = null

        fun instance():PsychologistRepository{

            return if(repository != null){
                repository!!
            }else{
                repository = PsychologistRepository()
                repository!!
            }
        }
    }

    fun save(user: User){
        val database = FirebaseFirestore.getInstance()
        database.collection(collectionPath).add(user)
    }

    fun delete(id:String){
        val database = FirebaseFirestore.getInstance()
        database.collection(collectionPath)
            .document(id).delete()
    }

    fun update(id:String, key: String, value: Any){
        val database = FirebaseFirestore.getInstance()
        val document = database
            .collection(collectionPath)
            .document(id)

        document.update(key ,value)
    }

    fun get(id: String): Professional {

        val database = FirebaseFirestore.getInstance()
        val snap = database.collection(collectionPath).document(id).get()
        val user = Professional()

        if(snap.isSuccessful) {
            user.experienceYears = snap.result["experienceYears"] as String
            user.professionalPosture = snap.result["professionalPosture"] as Int
            user.crp = snap.result["crp"] as String
            user.age = snap.result["age"] as String
            user.cpf = snap.result["cpf"] as String
            user.district = snap.result["district"] as String
            user.city = snap.result["city"] as String
            user.state = snap.result["state"] as String
            user.street = snap.result["street"] as String
            user.number = snap.result["number"] as String
            user.complement = snap.result["complement"] as String
            user.cep = snap.result["cep"] as String
        }

        return user
    }
}
