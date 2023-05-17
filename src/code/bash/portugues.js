let portugues = `#!/bin/bash

Portugues () {

	### Creates a languages folder to save data
	
	[[ -d "$DICCIONARIO/$DictLang" ]] || mkdir -p "$DICCIONARIO/$DictLang"
	
	### Show a list of offline words into our diccionary
	
	PALABRA="$(ls "$DICCIONARIO/$DictLang" | dmenu -p "O qué palavra pesquisas? ")"
	[[ -z \${PALABRA} ]] && exit 0

	### In case of not have the word, look for it into the RAE
	### https://dle.rae.es/diccionario
	
	[[ ! -f $DICCIONARIO/$DictLang/$PALABRA ]] && \
		IP && \
		wget -q --user-agent=$IP -O $DICCIONARIO/$PALABRA https://www.dicio.com.br/$PALABRA/ && \
		DEFINICION=$(grep -e 'class="tit-significado' -e 'class="significado textonovo"' $DICCIONARIO/$PALABRA \
		| sed -e 's/<[^>]\+>//g' -e "s/^\s\+//" | sed -n 2p | sed -re 's/\w*/(&)/1') && \
		echo "$DEFINICION" > $DICCIONARIO/$DictLang/$PALABRA && \
		rm $DICCIONARIO/$PALABRA

	### Make a info panel
	zenity --info \
		--title="Definición" \
		--text="$(cat $DICCIONARIO/$DictLang/$PALABRA)"
	}
`
export default portugues