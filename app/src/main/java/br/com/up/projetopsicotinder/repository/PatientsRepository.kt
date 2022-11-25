package br.com.up.projetopsicotinder.repository

import br.com.up.projetopsicotinder.models.Patient
import br.com.up.projetopsicotinder.models.User
import com.google.firebase.firestore.FirebaseFirestore


class PatientsRepository private constructor(){

    private val collectionPath = "Patients"

    companion object{

        private var repository:PatientsRepository? = null

        fun instance():PatientsRepository{

            return if(repository != null){
                repository!!
            }else{
                repository = PatientsRepository()
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

    fun get(id: String): Patient {

        val database = FirebaseFirestore.getInstance()
        val snap = database.collection(collectionPath).document(id).get()
        val user = Patient()

        if(snap.isSuccessful) {
            user.emergency_phone = snap.result["emergency_phone"] as String
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
