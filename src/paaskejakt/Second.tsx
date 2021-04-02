import { CopyBlock, github } from "react-code-blocks"

function Second() {
    let code = `#!/usr/bin/env python
dict = ?
print("Ditt neste hint er ved {} {}, ta en titt {} og sjekk også hva {} har å by på".format(dict["du"], dict["og"], dict["jag"], dict["kjære"]))`
    return (
        <div>
        <p style={{ textAlign: "left", color: "white" }}>https://discord.gg/tMy82bmQnE</p>
            <div style={{ textAlign: "center", fontSize: 20 }}>
                <h1>Bra jobba! Til og med skrekkfilm monstre kan være hjelpsomme 🤡</h1>
                <h2>Klar for en programmeringsgåte? her kommer d...</h2>

                <h2>
                    Å nei! en forferdelig person har stjålet dictionarien og lagt igjen denne beskjeden:
                </h2>
                <p style={{ display: "inline-block", textAlign: "left" }}>
                    Jeg er en pest og en plage, derfor gjorde jeg dette bedraget.<br />
            Men jeg skal gi deg en sjanse, slik at du kan komme videre i denne konkurranse.<br />
            Oppsøk meg, jeg vil gi deg det du søker, jeg er et menneske, ingen flere bøker.<br />
            Ofte ligger jeg lenge i senga, slik som han du bor med, og dyrene jeg er en fan av.<br />
            Akkurat nå er jeg ganske bored, vil du ta en prat på Discord?<br />
            Jeg legger igjen et hint på denne siden, klarer du å finne det eller vil du tape all tiden?
            </p>

                <h2>Programmeringsoppgave:</h2>
            </div>
            <div style={{display:"flex"}}>
            <div style={{width: "75%", margin:"auto" }}>
                    <CopyBlock
                        text={code}
                        language="python"
                        theme={github}
                        codeBlock
                    />
                </div>
            </div>
        </div>
    )
}

export default Second
