## ToDo List

## Améliorations à apporter :

1. Mieux structurer le code

J’ai séparé les composants mais je pense qu’il y a encore moyen d’optimiser la structure.

Ajouter quelques tests unitaires pour vérifier le bon fonctionnement des composants.

2. Améliorer l’interface utilisateur

Ajouter des animations pour rendre l’expérience plus fluide.

Rendre l’application plus accessible en ajoutant des labels et en testant avec un lecteur d’écran.

3. Optimisation du calcul des conversions

Actuellement, le calcul se fait à chaque changement d’état. Peut-être utiliser une fonction pour éviter des recalculs inutiles.

Vérifier s’il y a un moyen d’optimiser les mises à jour du taux de change.

## Raccourcis pris à cause du temps imparti

1. Pas de gestion avancée du taux fixe

Normalement, le taux fixe devrait être désactivé si la variation dépasse 2 %, mais j’ai préféré ne pas le gérer.

2. L’historique des conversions n'a pas été réalisé

Pour rester réaliste sur le temps disponible, je n’ai pas ajouté l’affichage des 5 dernières conversions.

3. Pas d’intégration avec une API réelle

Pour le moment, le taux de change est généré aléatoirement. Il faudrait utiliser une API externe pour des données réelles.

4. Gestion des erreurs basique

Actuellement, il n’y a pas de vérification avancée sur les entrées utilisateur. Un message d’erreur pourrait être ajouté si la saisie n’est pas correcte.