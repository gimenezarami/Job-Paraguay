
import json
import os
import time
from datetime import datetime

# --- CONFIGURACIÓN ---
ARCHIVO_JSON = 'ofertas.json'

def limpiar_pantalla():
    os.system('cls' if os.name == 'nt' else 'clear')

def subir_a_github():
    print("\n☁️  Subiendo cambios a GitHub...")
    # Agrega todos los cambios
    os.system('git add .')
    # Crea el "paquete" con un mensaje automático de la fecha/hora
    mensaje = f"Actualizacion ofertas {datetime.now().strftime('%d/%m %H:%M')}"
    os.system(f'git commit -m "{mensaje}"')
    # Envía a la nube
    os.system('git push')
    print("✅ ¡Listo! Tu página web ya está actualizada.")

def main():
    limpiar_pantalla()
    print("=========================================")
    print("   🚀 PUBLICADOR DE EMPLEOS PARAGUAY")
    print("=========================================")

    # 1. Cargar el archivo actual
    datos = []
    try:
        with open(ARCHIVO_JSON, 'r', encoding='utf-8') as f:
            datos = json.load(f)
    except FileNotFoundError:
        print("⚠️ No se encontró ofertas.json, creando uno nuevo...")
    except json.JSONDecodeError:
        print("⚠️ Error leyendo el JSON, se iniciará uno vacío.")

    while True:
        print(f"\nActualmente hay {len(datos)} ofertas publicadas.")
        print("Ingresa los datos de la nueva oferta (o escribe 'SALIR' en Título para terminar):")
        
        # 2. Pedir datos al usuario
        titulo = input("\n📝 Título del Puesto (ej. Contador/a): ").strip()
        if titulo.upper() == 'SALIR':
            break

        ubicacion = input("📍 Ubicación (ej. Luque): ").strip()
        
        # Truco: Permitir pegar descripciones largas
        print("📄 Descripción/Requisitos (Pega el texto y presiona Enter):")
        descripcion = input("> ").strip()
        
        contacto = input("📧 Link o Correo (ej. buscandotalentos612@gmail.com): ").strip()

        # 3. Crear el objeto oferta
        nueva_oferta = {
            "titulo": titulo,
            "ubicacion": ubicacion,
            "fecha": datetime.now().strftime("%d/%m/%Y"), # Fecha de hoy automática
            "descripcion": descripcion,
            "link": contacto
        }

        # 4. Insertar al principio (índice 0) para que salga primero en la web
        datos.insert(0, nueva_oferta)
        print("✨ ¡Oferta agregada a la lista local!")
        
        continuar = input("¿Agregar otra ahora? (s/n): ")
        if continuar.lower() != 's':
            break

    # 5. Guardar el archivo JSON
    print("\n💾 Guardando archivo local...")
    with open(ARCHIVO_JSON, 'w', encoding='utf-8') as f:
        json.dump(datos, f, indent=4, ensure_ascii=False)

    # 6. Preguntar si subir a internet
    confirmar = input("\n¿Quieres publicar esto en Internet AHORA? (s/n): ")
    if confirmar.lower() == 's':
        subir_a_github()
    else:
        print("🆗 Guardado solo en tu PC. No olvides subirlo luego.")

if __name__ == "__main__":
    main()
