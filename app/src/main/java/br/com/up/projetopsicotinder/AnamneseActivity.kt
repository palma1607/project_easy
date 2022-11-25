package br.com.up.projetopsicotinder

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.LayoutInflater
import android.widget.Button
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.TextView
import br.com.up.projetopsicotinder.models.Option
import br.com.up.projetopsicotinder.models.Question

class AnamneseActivity : AppCompatActivity() {

    private var patientQuestions: MutableList<Question> = mutableListOf()
    private var ansers: MutableList<String> = mutableListOf()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_anamnese)

        patientQuestions = mutableListOf(
            Question(
                id = "1",
                label = "Qual postura você espera do psicólogo em relação à comunicação?",
                type="radio",
                options = listOf(
                    Option(value="A", label = "Desejo um(a) psicólogo(a) que tenda a ter uma postura mais ativa durante as sessões, realizando vários apontamentos"),
                    Option(value="B", label = "Desejo um(a) psicólogo(a) que tenda a ter uma postura mais passiva, fale menos e me deixe falar bastante sem ser muito interrompido(a)")
                )
            ),
            Question(
                id = "2",
                label = "Considerando a escolha de um profissional, você prefere:",
                type="radio",
                options = listOf(
                    Option(value="A", label = "Um profissional com até 35 anos de idade"),
                    Option(value="B", label = "Um profissional com idade a partir de 36 anos"),
                    Option(value="C", label = "Ambos")
                )
            ),
            Question(
                id = "3",
                label = "Você considera que se sentirá mais à vontade com um profissional do gênero:",
                type="radio",
                options = listOf(
                    Option(value="A", label = "Mulher cisgênero (Se identifica com seu sexo biológico)."),
                    Option(value="B", label = "Homem cisgênero (Se identifica com seu sexo biológico)."),
                    Option(value="C", label = "Mulher transgênero (Se identifica com sexo diferente do biológico)."),
                    Option(value="D", label = "Homem transgênero (Se identifica com sexo diferente do biológico)."),
                    Option(value="E", label = "Não-binário."),
                    Option(value="F", label = "Indiferente")
                )
            )
        )

        val buttonNext : Button = findViewById(R.id.button_next)

        var index = 0;

        buttonNext.setOnClickListener {
            if (index == patientQuestions.size - 1) {
                val intent = Intent(applicationContext, FinishOnboardingActivity::class.java)
                startActivity(intent)
            } else {
                renderQuestion(patientQuestions[++index])
            }
        }
        renderQuestion(patientQuestions[index])
    }

    private fun renderQuestion(question: Question) {
        val textQuestionLabel : TextView = findViewById(R.id.text_question_label)
        val radioGroup : RadioGroup = findViewById(R.id.radio_group)

        radioGroup.removeAllViews()

        for (option in question.options) {
            val viewOption = LayoutInflater.from(this).inflate(R.layout.option_radio_item, radioGroup, false) as RadioButton

            radioGroup.addView(viewOption)

            viewOption.text = option.label
            viewOption.isChecked = option.checked

            viewOption.setOnCheckedChangeListener {_, _ ->
                option.checked = viewOption.isChecked
            }
        }

        textQuestionLabel.text = question.label
    }
}