let espanol = `#!/bin/bash

Español () {

	### Creates a languages folder to save data
	
	[[ -d "$DICCIONARIO/$DictLang" ]] || mkdir -p "$DICCIONARIO/$DictLang"
	
	### Show a list of offline words into our diccionary
	
	PALABRA="$(ls "$DICCIONARIO/$DictLang" | dmenu -p "¿Qué palabra buscas? ")"
	[[ -z \${PALABRA} ]] && exit 0
	
	### In case of not have the word, look for it into the RAE
	### https://dle.rae.es/diccionario
	
	[[ ! -f $DICCIONARIO/$DictLang/$PALABRA ]] && \
		IP && \
		wget -q --user-agent=$IP -O $DICCIONARIO/$PALABRA https://dle.rae.es/$PALABRA && \
		DEFINICION=$(grep 'name="description"' $DICCIONARIO/$PALABRA |  sed -e 's/^[^.*]*1//g' -e "s/^/1/" -e "s/\">//") && \
		echo "$DEFINICION" > $DICCIONARIO/$DictLang/$PALABRA && \
		rm $DICCIONARIO/$PALABRA
	
	### Make a info panel
	zenity --info \
		--title="Definición" \
		--text="$(cat $DICCIONARIO/$DictLang/$PALABRA)"
	}
` 

export default espanol