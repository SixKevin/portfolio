import os

def effacer_ecran():
    """Nettoie la console pour un affichage propre"""
    os.system('cls' if os.name == 'nt' else 'clear')

def afficher_menu():
    print("╔══════════════════════════════╗")
    print("║      CALCULATRICE PYTHON     ║")
    print("╠══════════════════════════════╣")
    print("║  1. Addition       (+)       ║")
    print("║  2. Soustraction   (-)       ║")
    print("║  3. Multiplication (*)       ║")
    print("║  4. Division       (/)       ║")
    print("║  Q. Quitter                  ║")
    print("╚══════════════════════════════╝")

def calculer():
    while True:
        effacer_ecran()
        afficher_menu()
        
        choix = input("\n Ton choix : ").upper()
        
        if choix == 'Q':
            print("\nMerci d'avoir utilisé la calculatrice. À bientôt !")
            break
            
        if choix not in ['1', '2', '3', '4']:
            input("❌ Erreur : Choix invalide. Appuie sur Entrée...")
            continue
            
        try:
            nombre1 = float(input("   Entrez le 1er nombre : "))
            nombre2 = float(input("   Entrez le 2ème nombre : "))
            resultat = 0
            operation = ""

            if choix == '1':
                resultat = nombre1 + nombre2
                operation = "+"
            elif choix == '2':
                resultat = nombre1 - nombre2
                operation = "-"
            elif choix == '3':
                resultat = nombre1 * nombre2
                operation = "*"
            elif choix == '4':
                if nombre2 == 0:
                    print("\n Erreur : Impossible de diviser par zéro !")
                    input("\nAppuie sur Entrée pour recommencer...")
                    continue
                resultat = nombre1 / nombre2
                operation = "/"

            print(f"\n RÉSULTAT : {nombre1} {operation} {nombre2} = {resultat}")
            
        except ValueError:
            print("\n Erreur : Veuillez entrer des chiffres valides.")
        
        input("\nAppuie sur Entrée pour faire un autre calcul...")

if __name__ == "__main__":
    calculer()
