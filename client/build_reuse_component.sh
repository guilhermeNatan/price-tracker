#!/bin/bash

# @author guilherme.natan
#Script usado para criar telas respeitando a estrutura de diretorios do projeto


echo -n "Entre com o nome da pagina <ex Settings>: "
read NAME
mkdir  -p src/reuse-components/$NAME
sed "s/TemplateScreen/${NAME}/g" -e "s/style'/${NAME}Styles'/g"  src/TemplateModule/TemplateScreen.js >   src/reuse-components/$NAME/${NAME}.js
sed "s/TemplateScreen/${NAME}/g" src/TemplateModule/index.js >  src/reuse-components/$NAME/index.js
cp src/TemplateModule/style.js   src/reuse-components/$NAME
mv  src/reuse-components/$NAME/style.js src/reuse-components/$NAME/${NAME}Styles.js




