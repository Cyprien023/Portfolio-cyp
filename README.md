
- React
- Vite
- Typescript
- Tailwindcss
- nginx
- node.js
- express



### **1️⃣ Dockerise le projet**
#### 📌  `Dockerfile`

node:18-alpine
build avec Vite
nginx:alpine


### **2️⃣ Gérer plusieurs conteneurs avec Docker Compose**

#### **📌 `docker-compose.yml` **



### **3️⃣ Automatisation du build et déploiement avec GitHub Actions**
#### 📌 `.github/workflows/deploy.yml` :

sur docker hub



---

## ✅ 2. **Conteneurisation (Docker)**

### 2.1 **Dockerfile**

- Le fichier `Dockerfile` est présent, configuré et testé avec succès. Il contient les instructions nécessaires pour construire l'image Docker de l'application.


### 2.2 **Docker Hub**

- La configuration du projet pour effectuer des `push` d'images Docker vers Docker Hub via GitHub Actions est en place et fonctionne correctement.


### 2.3 **Variables d'Environnement / Secrets**

- Les variables d'environnement et secrets (tels que les identifiants pour Docker Hub) sont gérés via les **Secrets GitHub**. Cela permet de sécuriser les informations sensibles utilisées dans les workflows.

### 2.4 **Optimisation / Healthchecks**




### 2.5 **Persistance des Données**




---

## 🟡 3. **CI (Intégration Continue)**

### 3.1 **GitHub Actions**

- Un pipeline GitHub Actions est configuré et fonctionne bien pour effectuer des builds et pousser des images Docker sur Docker Hub. Les workflows suivants sont en place :

    - **build.yml** : Effectue la construction de l'application.

    - **deploy.yml** : Gère le déploiement.

    - **lint.yml** : Vérifie la qualité du code avec un linter.

    - **tests.yml** : Exécute les tests automatisés de l'application.

    - **codeql.yml** : Effectue une analyse de sécurité du code.

    - **audit.yml** : Audite les dépendances pour détecter les vulnérabilités.


### 3.2 **Tests Automatisés**

- Tous les tests sont automatisés et bien intégrés dans les workflows CI via GitHub Actions. Les tests incluent la vérification des performances, de la sécurité et de la qualité du code.


### 3.3 **Analyse de Code / Scan de Sécurité**

- La configuration pour l'analyse de la sécurité est en place via **CodeQL** et l'audit des dépendances avec **npm audit**. Ces outils vérifient les vulnérabilités dans le code source et les bibliothèques utilisées.


### 3.4 **Vérification à Chaque Commit**

- La vérification du code à chaque commit est bien configurée, en particulier avec l'intégration de **CodeQL** et des scanners de sécurité.


### 3.5 **Notifications**



---

## 🟡 4. **CD (Déploiement Continu)**

### 4.1 **Déploiement GitHub Pages**

- Le déploiement sur **GitHub Pages** fonctionne avec succès via le fichier `deploy.yml`. L'application est automatiquement déployée à chaque push sur la branche `main` / DockerHub.


### 4.2 **Stratégie de Rollback / Blue/Green**



### 4.3 **Tests Post-Déploiement**




---

## 🟡 5. **Docker Compose**

### 5.1 **Docker Compose pour Développement Local**

- Il y a un fichier **`docker-compose.yml`** pour la gestion du développement local avec plusieurs services (par exemple, le frontend, le backend, la base de données).



### 5.2 **Volumes / Persistance / Réseau**





---

## 🟡 6. **Kubernetes**


### **Manifestes**
- Manifeste frontend : deployment-frontend.yaml
- Manifeste backend : deployment-backend.yaml
  `kubectl apply -f k8s/deployments/deployment-frontend.yaml`
  `kubectl apply -f k8s/deployments/deployment-backend.yaml`

### **Gestions des secrets**
- Secrets : backend-secrets.yaml
  `kubectl apply -f k8s/secrets/backend-secrets.yaml`

### **ConfigMap**
- Configmap : configmap.yaml
  `kubectl apply -f k8s/secrets/configmap.yaml`


### **Health Checks**
- Health Checks : deployment-backend.yaml
  `kubectl apply -f k8s/deployments/deployment-backend.yaml`

### **Persistance des données**
- Persistance : persistance-volume.yaml
  `kubectl apply -f k8s/persistance/persistance-volume.yaml`


- pods, services, volumes
- Configuration des Ressources (CPU, Mémoire) : **`requests`**, **`limits`**




`kubectl get pods`
`kubectl get services`
![[Pasted image 20250428142305.png]]



![[Pasted image 20250429164744.png]]





### **Problèmes rencontrés :**
- **pipeline github actions / github pages**
- **codeql / audit**