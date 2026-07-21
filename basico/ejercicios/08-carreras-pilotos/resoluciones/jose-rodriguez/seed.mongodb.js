use('campus_carreras_pilotos')

// 2. insertar 5 documentos coherentes y realistas con datos numericos de precision

db.race.insertMany([
  {
    "_id": "race_2026_gp_silverstone",
    "grand_prix": "Gran Premio de Gran Bretaña",
    "season": 2026,
    "date": "2026-07-05T15:00:00Z",
    "status": "Completed",
    "circuit": {
      "name": "Circuito de Silverstone",
      "length_km": 5.891,
      "turns": 18
    },
    "results": [
      {
        "position": 1,
        "driver_id": "driver_norris_04",
        "team_id": "team_mclaren",
        "time": "1:24:22.538",
        "points": 25
      },
      {
        "position": 2,
        "driver_id": "driver_hamilton_44",
        "team_id": "team_ferrari",
        "time": "+3.412",
        "points": 18
      },
      {
        "position": 3,
        "driver_id": "driver_russell_63",
        "team_id": "team_mercedes",
        "time": "+8.991",
        "points": 15
      },
      {
        "position": 4,
        "driver_id": "driver_verstappen_01",
        "team_id": "team_redbull",
        "time": "+12.104",
        "points": 12
      }
    ]
  },
  {
    "_id": "race_2026_gp_spa",
    "grand_prix": "Gran Premio de Bélgica",
    "season": 2026,
    "date": "2026-07-26T14:00:00Z",
    "status": "Completed",
    "circuit": {
      "name": "Circuit de Spa-Francorchamps",
      "length_km": 7.004,
      "turns": 20
    },
    "results": [
      {
        "position": 1,
        "driver_id": "driver_verstappen_01",
        "team_id": "team_redbull",
        "time": "1:18:04.119",
        "points": 26
      },
      {
        "position": 2,
        "driver_id": "driver_piastri_81",
        "team_id": "team_mclaren",
        "time": "+5.673",
        "points": 18
      },
      {
        "position": 3,
        "driver_id": "driver_leclerc_16",
        "team_id": "team_ferrari",
        "time": "+14.223",
        "points": 15
      },
      {
        "position": 4,
        "driver_id": "driver_alonso_14",
        "team_id": "team_astonmartin",
        "time": "+22.810",
        "points": 12
      }
    ]
  },
  {
    "_id": "race_2026_gp_suzuka",
    "grand_prix": "Gran Premio de Japón",
    "season": 2026,
    "date": "2026-04-05T05:00:00Z",
    "status": "Completed",
    "circuit": {
      "name": "Circuito de Suzuka",
      "length_km": 5.807,
      "turns": 18
    },
    "results": [
      {
        "position": 1,
        "driver_id": "driver_verstappen_01",
        "team_id": "team_redbull",
        "time": "1:30:54.332",
        "points": 25
      },
      {
        "position": 2,
        "driver_id": "driver_perez_11",
        "team_id": "team_redbull",
        "time": "+12.553",
        "points": 18
      },
      {
        "position": 3,
        "driver_id": "driver_sainz_55",
        "team_id": "team_williams",
        "time": "+19.441",
        "points": 15
      },
      {
        "position": 4,
        "driver_id": "driver_leclerc_16",
        "team_id": "team_ferrari",
        "time": "+20.112",
        "points": 12
      }
    ]
  },
  {
    "_id": "race_2026_gp_interlagos",
    "grand_prix": "Gran Premio de São Paulo",
    "season": 2026,
    "date": "2026-11-01T17:00:00Z",
    "status": "Scheduled",
    "circuit": {
      "name": "Autódromo José Carlos Pace",
      "length_km": 4.309,
      "turns": 15
    },
    "results": []
  },
  {
    "_id": "race_2026_gp_austin",
    "grand_prix": "Gran Premio de Estados Unidos",
    "season": 2026,
    "date": "2026-10-25T19:00:00Z",
    "status": "Completed",
    "circuit": {
      "name": "Circuito de las Américas",
      "length_km": 5.513,
      "turns": 20
    },
    "results": [
      {
        "position": 1,
        "driver_id": "driver_leclerc_16",
        "team_id": "team_ferrari",
        "time": "1:35:12.980",
        "points": 25
      },
      {
        "position": 2,
        "driver_id": "driver_norris_04",
        "team_id": "team_mclaren",
        "time": "+8.442",
        "points": 18
      },
      {
        "position": 3,
        "driver_id": "driver_verstappen_01",
        "team_id": "team_redbull",
        "time": "+11.201",
        "points": 15
      },
      {
        "position": 4,
        "driver_id": "driver_russell_63",
        "team_id": "team_mercedes",
        "time": "+18.553",
        "points": 13
      }
    ]
  }
]);