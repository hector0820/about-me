let diccionario = `#!/bin/bash
DICCIONARIO="$HOME/Documents/Diccionario"

[[ ! -d $DICCIONARIO ]] && mkdir -p $DICCIONARIO


### Change the languages

if [[ $1 == "-l" ]] || [[ $1 == "--lang" ]]
then
	select_lang
fi

### Select the languages from lang file

DictLang=$(cat ~/.diccionario_Lang)

### Knowing our ip from download meanings using terminal tools

IP () { 
	IP=$(wget -q -O - ipinfo.io/ip) 
}

### Searching depending the language

case $DictLang in
	Español)
		source Español
		Español;;
	English)
		source Ingles
		Ingles;;
	Português)
		source Portugues
		Portugues;;
esac
`
export default diccionario