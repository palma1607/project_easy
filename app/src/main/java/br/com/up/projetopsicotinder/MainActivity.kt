package br.com.up.projetopsicotinder

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val testBtn = findViewById<Button>(R.id.test_btn)

        testBtn.setOnClickListener {
            val intent = Intent(this, PatientRegister::class.java)
            startActivity(intent)
        }
    }
}