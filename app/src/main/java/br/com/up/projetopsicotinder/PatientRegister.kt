package br.com.up.projetopsicotinder

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import br.com.up.projetopsicotinder.models.Patient
import br.com.up.projetopsicotinder.models.User
import com.google.android.gms.tasks.OnCompleteListener
import com.google.android.gms.tasks.OnFailureListener
import com.google.android.gms.tasks.OnSuccessListener
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore

class PatientRegister : AppCompatActivity() {

    private var mAuth = FirebaseAuth.getInstance()
    private var db = FirebaseFirestore.getInstance();

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)

        registerUser()
    }

    fun registerUser(){
        val email = "teste@gmail.com"
        val password = "1234"

        mAuth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener(OnCompleteListener {
                if (it.isSuccessful){
                    val user = Patient()
                    user.emergency_phone = "21421412412"
                    user.age = "18 - 20"
                    user.cpf = "12218344492"
                    user.district = "Portao"
                    user.city = "Curitiba"
                    user.state = "Parana"
                    user.street = "Rua de testes"
                    user.number = "61"
                    user.complement = "Ap 1111"
                    user.cep = "1422187412"
                    user.userType = 1

                    db.collection("patients")
                        .add(user)
                        .addOnSuccessListener(OnSuccessListener {
                            val toast = Toast.makeText(applicationContext, "Paciente cadastrado com id: " + it.id, Toast.LENGTH_LONG)
                            toast.show()
                        })
                        .addOnFailureListener(OnFailureListener{
                            val toast = Toast.makeText(applicationContext, "Falha ao cadastrar paciente", Toast.LENGTH_LONG)
                            toast.show()
                        })
                }
                else{
                    val toast = Toast.makeText(applicationContext, "Falha ao criar usuário", Toast.LENGTH_LONG)
                    toast.show()
                }
            })
    }
}