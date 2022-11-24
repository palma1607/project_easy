package br.com.up.projetopsicotinder

import android.Manifest
import android.location.Geocoder
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView

import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.GoogleMap
import com.google.android.gms.maps.OnMapReadyCallback
import com.google.android.gms.maps.SupportMapFragment
import com.google.android.gms.maps.model.LatLng
import com.google.android.gms.maps.model.MarkerOptions
//import br.com.up.projetopsicotinder.databinding.ActivityMapsBinding
import br.com.up.projetopsicotinder.repositories.ProfileRepository
//import com.google.android.gms.location.*
import java.util.*

class ProfileActivity : AppCompatActivity(), OnMapReadyCallback {
    private var lat: Double = -25.444697970286413
    private var lon: Double = -49.35944397301655

    private val local = Locale("pt_br", "Brazil")
    private val geocoder = Geocoder(this, local)

    private var id: String = "Default"

    private lateinit var mMap: GoogleMap
    //private lateinit var binding: ActivityMapsBinding

    private lateinit var avatarIcon: ImageView

    private lateinit var name: TextView
    private lateinit var gender: TextView
    private lateinit var adress: TextView

    private lateinit var botao: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        requestPermissions(
            arrayOf(Manifest.permission.ACCESS_FINE_LOCATION),
            1000
        )

        //binding = ActivityMapsBinding.inflate(layoutInflater)
        //setContentView(binding.root)

        avatarIcon = findViewById(R.id.perfil_foto)
        avatarIcon.setImageResource(R.drawable.avatar)

        name = findViewById(R.id.perfil_nome)
        gender = findViewById(R.id.perfil_genero)
        adress = findViewById(R.id.perfil_endereco)
        botao = findViewById(R.id.perfil_falar)

        ProfileRepository.instance().get(id) {
                profile ->
            if(profile != null)
            {
                /*
                lon = profile.longitude as Double
                lat = profile.latitude as Double

                val location = geocoder.getFromLocationName(profile.street, 1)[0]

                if(location != null)
                {
                    lat = location.latitude
                    lon = location.longitude
                }
                */

                // Obtain the SupportMapFragment and get notified when the map is ready to be used.
                val mapFragment = supportFragmentManager
                    .findFragmentById(R.id.perfil_mapa) as SupportMapFragment
                mapFragment.getMapAsync(this)

                name.setText(profile.name)
                gender.setText(profile.gender)
                adress.setText(profile.street)

                botao.setOnClickListener {
                    //Conversar com o Profissional
                }
            }
        }

        //PerfilRepository.instance().get()
    }

    override fun onMapReady(googleMap: GoogleMap) {
        mMap = googleMap

        val location = LatLng(lat, lon)
        mMap.addMarker(MarkerOptions().position(location).title(""))
        mMap.moveCamera(CameraUpdateFactory.newLatLng(location))
    }
}