package br.com.up.projetopsicotinder

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import com.google.android.gms.tasks.OnCompleteListener
import com.google.firebase.auth.FirebaseAuth

class MainActivity : AppCompatActivity() {

    var mAuth = FirebaseAuth.getInstance()
    private lateinit var emailInput : EditText
    private lateinit var senhaInput : EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        emailInput = findViewById<EditText>(R.id.textInputLoginEmail)
        senhaInput = findViewById<EditText>(R.id.textInputLoginPassword)

        val btnLogin = findViewById<Button>(R.id.loginBtn)
        val btnRegister = findViewById<Button>(R.id.button_register)

        btnLogin.setOnClickListener {
            userLogin()
        }

        btnRegister.setOnClickListener {
            val intent = Intent(this@MainActivity, PatientRegister::class.java)
            startActivity(intent)
        }
    }

    fun userLogin(){
        val email = emailInput.text.toString().trim()
        val password = senhaInput.text.toString().trim()

        if (email.isEmpty()){
            emailInput.setError("E-mail não inserido")
            emailInput.requestFocus()
            return
        }

        if (password.isEmpty()){
            senhaInput.setError("Senha não inserida")
            senhaInput.requestFocus()
            return
        }

        mAuth.signInWithEmailAndPassword(email, password).addOnCompleteListener(
            OnCompleteListener {
                if (it.isSuccessful){
                    val toast = Toast.makeText(
                        this@MainActivity,
                        "Usuário logado",
                        Toast.LENGTH_LONG
                    ).show()
                    // redirecionar para próxima tela
                }
                else{
                    val toast = Toast.makeText(
                        applicationContext,
                        "Falha no login",
                        Toast.LENGTH_LONG
                    ).show()
                }
            })
    }
}