window.BENCHMARK_DATA = {
  "lastUpdate": 1675671697948,
  "repoUrl": "https://github.com/savushkin-r-d/ptusa_main",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "dzimitriy@gmail.com",
            "name": "Dzmitry Ivaniuk",
            "username": "idzm"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f53b28c50f6cfd715650344787da3097d37818d7",
          "message": "Add perfomance test (#542)",
          "timestamp": "2023-02-06T10:16:35+03:00",
          "tree_id": "67a58ddea356d366201e090ed63c6b77e6ab37ef",
          "url": "https://github.com/savushkin-r-d/ptusa_main/commit/f53b28c50f6cfd715650344787da3097d37818d7"
        },
        "date": 1675668015008,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "write_devices_service/\"no compression\"",
            "value": 21.275230050768428,
            "unit": "us/iter",
            "extra": "iterations: 30728\ncpu: 21.27173913043478 us\nthreads: 1"
          },
          {
            "name": "write_devices_service/\"with compression\"",
            "value": 108.27805432463164,
            "unit": "us/iter",
            "extra": "iterations: 6093\ncpu: 108.272214016084 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "alexandraneroda",
            "username": "alexandraneroda"
          },
          "committer": {
            "name": "alexandraneroda",
            "username": "alexandraneroda"
          },
          "id": "7514f535fb3ac22fbdaa3ff946d48914e4ce25e3",
          "message": "Eliminate code duplication in CIP classes",
          "timestamp": "2022-07-13T08:59:56Z",
          "url": "https://github.com/savushkin-r-d/ptusa_main/pull/527/commits/7514f535fb3ac22fbdaa3ff946d48914e4ce25e3"
        },
        "date": 1675671697340,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "write_devices_service/\"no compression\"",
            "value": 21.813148643592086,
            "unit": "us/iter",
            "extra": "iterations: 32070\ncpu: 21.811546616775804 us\nthreads: 1"
          },
          {
            "name": "write_devices_service/\"with compression\"",
            "value": 112.1527602048969,
            "unit": "us/iter",
            "extra": "iterations: 6247\ncpu: 112.14170001600768 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}