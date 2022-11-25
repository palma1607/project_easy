package br.com.up.projetopsicotinder

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class FinishOnboardingActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_finish_onboarding)

        val button : Button = findViewById(R.id.button_finish_anamnese)

        button.setOnClickListener {
            val intent = Intent(applicationContext, HomeAppActivity::class.java)
            startActivity(intent)
        }
    }
}