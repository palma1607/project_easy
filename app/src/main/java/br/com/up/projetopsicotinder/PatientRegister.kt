package br.com.up.projetopsicotinder

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Patterns
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Switch
import android.widget.Toast
import br.com.up.projetopsicotinder.models.Patient
import br.com.up.projetopsicotinder.models.Professional
import br.com.up.projetopsicotinder.models.User
import com.google.android.gms.tasks.OnCompleteListener
import com.google.android.gms.tasks.OnFailureListener
import com.google.android.gms.tasks.OnSuccessListener
import com.google.android.material.textfield.TextInputEditText
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.firestore.FirebaseFirestore

class PatientRegister : AppCompatActivity() {

    var mAuth = FirebaseAuth.getInstance()
    var db = FirebaseFirestore.getInstance()

    var isProfessional = false

    private lateinit var nomeInput: EditText
    private lateinit var emailInput: EditText
    private lateinit var passwordInput: EditText
    private lateinit var telefoneInput: EditText
    private lateinit var crpInput: EditText
    private lateinit var confirmPasswordInput: EditText
    private lateinit var idadeInput: EditText
    private lateinit var cpfInput: EditText
    private lateinit var cepInput: EditText
    private lateinit var enderecoInput: EditText
    private lateinit var estadoInput: EditText
    private lateinit var registerBtn: Button


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro)

        nomeInput = findViewById(R.id.textInputEditText_name)

        emailInput = findViewById(R.id.textInputEditText_email)
        passwordInput = findViewById(R.id.textInputEditText_password)

        telefoneInput = findViewById(R.id.textInputEditText_emergencyNumber)
        crpInput = findViewById(R.id.textInputEditText_crp)
        registerBtn = findViewById(R.id.button_save)

        confirmPasswordInput = findViewById(R.id.textInputEditText_confirmPassword)
        idadeInput = findViewById(R.id.textInputEditText_age)
        cpfInput = findViewById(R.id.textInputEditText_cpf)
        cepInput = findViewById(R.id.textInputEditText_cep)
        enderecoInput = findViewById(R.id.textInputEditText_adress)
        estadoInput = findViewById(R.id.textInputEditText_state)

        val isProSwitch: Switch = findViewById(R.id.switch_isPro)

        crpInput.visibility = View.INVISIBLE
        estadoInput.visibility = View.INVISIBLE

        isProSwitch.setOnClickListener {
            isProfessional = !isProfessional
            if (isProfessional) {
                telefoneInput.visibility = View.INVISIBLE
                crpInput.visibility = View.VISIBLE
                estadoInput.visibility = View.VISIBLE
            } else {
                telefoneInput.visibility = View.VISIBLE
                crpInput.visibility = View.INVISIBLE
                estadoInput.visibility = View.INVISIBLE
            }
        }

        registerBtn.setOnClickListener {
            registerUser()
        }
    }

    fun isCPF(document: String): Boolean {
        if (document.isEmpty()) return false

        val numbers = document.filter { it.isDigit() }.map {
            it.toString().toInt()
        }

        if (numbers.size != 11) return false

        //repeticao
        if (numbers.all { it == numbers[0] }) return false

        //digito 1
        val dv1 = ((0..8).sumOf { (it + 1) * numbers[it] }).rem(11).let {
            if (it >= 10) 0 else it
        }

        val dv2 = ((0..8).sumOf { it * numbers[it] }.let { (it + (dv1 * 9)).rem(11) }).let {
            if (it >= 10) 0 else it
        }

        return numbers[9] == dv1 && numbers[10] == dv2
    }

    fun registerUser() {
        val nome = nomeInput.text.toString().trim()
        val email = emailInput.text.toString().trim()
        val password = passwordInput.text.toString().trim()
        val confirmPassword = confirmPasswordInput.text.toString().trim()
        val idade = idadeInput.text.toString().trim()
        val cpf = cpfInput.text.toString().trim()
        val cep = cepInput.text.toString().trim()
        val endereco = enderecoInput.text.toString().trim()
        val telEmergencia = telefoneInput.text.toString().trim()
        val crp = crpInput.text.toString().trim()
        val estado = estadoInput.text.toString().trim()

        if (nome.isEmpty()){
            nomeInput.setError("Nome é obrigatório")
            nomeInput.requestFocus()
            return
        }

        if (email.isEmpty()){
            emailInput.setError("E-mail é obrigatório")
            emailInput.requestFocus()
            return
        }

        if (!Patterns.EMAIL_ADDRESS.matcher(email).matches()){
            emailInput.setError("E-mail inválido")
            emailInput.requestFocus()
            return
        }

        if (password.isEmpty()){
            passwordInput.setError("Senha é obrigatória")
            passwordInput.requestFocus()
            return
        }

        if (password.length < 6){
            passwordInput.setError("Senha inválida")
            passwordInput.requestFocus()
            return
        }

        if (password != confirmPassword){
            confirmPasswordInput.setError("As senhas estão diferentes")
            confirmPasswordInput.requestFocus()
            return
        }

        if (idade.isEmpty()){
            idadeInput.setError("Idade é obrigatório")
            idadeInput.requestFocus()
            return
        }

        if (Integer.parseInt(idade) < 18){
            idadeInput.setError("Idade Necessaria maior 18")
            idadeInput.requestFocus()
            return
        }

        if (cpf.isEmpty()){
            cpfInput.setError("CPF é obrigatório")
            cpfInput.requestFocus()
            return
        }

        if (!isCPF(cpf)){
            cpfInput.setError("CPF é Inválido")
            cpfInput.requestFocus()
            return
        }

        // Validar cpf aqui //

        if (cep.isEmpty()){
            cepInput.setError("CEP é obrigatório")
            cepInput.requestFocus()
            return
        }

        // Validar CEP aqui //

        if (endereco.isEmpty()){
            enderecoInput.setError("Endereço é obrigatório")
            enderecoInput.requestFocus()
            return
        }

        if (isProfessional){
            if (crp.isEmpty()){
                crpInput.setError("CRP é obrigatório")
                crpInput.requestFocus()
                return
            }
            if(estado.isEmpty()){
                estadoInput.setError("Estado é obrigatório")
                estadoInput.requestFocus()
                return
            }

            // Validar CRP aqui //
        }
        else{
            if (telEmergencia.isEmpty()){
                telefoneInput.setError("Telefone Emergencial é obrigatório")
                telefoneInput.requestFocus()
                return
            }
        }

        mAuth.createUserWithEmailAndPassword(email, password)
            .addOnCompleteListener(OnCompleteListener {
                if (it.isSuccessful) {
                    var user: User? = null
                    var collectionName: String? = null

                    if (isProfessional){
                        user = Professional()
                        user?.crp = crp
                        collectionName = "Professionals"
                    }
                    else{
                        user = Patient()
                        user?.emergency_phone = telEmergencia
                        collectionName = "Users"
                    }
                    user?.name = nome
                    user?.age = idade
                    user?.cpf = cpf
                    user?.email = email
                    user?.endereco = endereco
                    user?.cep = cep

                    db.collection(collectionName)
                        .add(user)
                        .addOnSuccessListener(OnSuccessListener {
                            val toast = Toast.makeText(
                                applicationContext,
                                "Usuário cadastrado com id: " + it.id,
                                Toast.LENGTH_LONG
                            )
                            toast.show()
                            val intent = Intent(this, MainActivity::class.java)
                            startActivity(intent)
                        })
                        .addOnFailureListener(OnFailureListener {
                            val toast = Toast.makeText(
                                applicationContext,
                                "Falha ao cadastrar usuário no banco",
                                Toast.LENGTH_LONG
                            )
                            toast.show()
                        })
                } else {
                    val toast = Toast.makeText(
                        applicationContext,
                        "Falha ao criar usuário no auth",
                        Toast.LENGTH_LONG
                    )
                    toast.show()
                }
            })
    }
}