# Quête jQuery - Write less, do more

Comme le site utilise AJAX pour récupérer les urls des images à charger, il faut un serveur local :
```
$ git clone https://github.com/maallard/quete-jquery-write-less.git
$ cd quete-jquery-write-less
$ python -m SimpleHTTPServer
```
Puis allez dans votre navigateur sur `localhost:8000`

Pour changer les images, modifiez les urls dans _images.json_. Si celle ci viennent de l'extérieur ne pas oublier le _http://_ ou _https://_ devant l'url

Par défaut, les images sont 500x500px. Toute image autre que cette dimension est redimensionnée (par exemple, l'image du furet).

Pour changer la taille du carousel, modifer les variables suivantes :
```css
@width: 500px;
@height: 500px;
```
dans le fichier _carousel.less_, puis lancer la commande : `lessc carousel.less carousel.css`
