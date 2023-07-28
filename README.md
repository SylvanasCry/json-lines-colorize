## json-lines-colorize

Colorizes the JSON-strings input stream (stdin).

### Installation

```shell
npm install -g @sylvanas-cry/json-lines-colorize
```

### Usage

```shell
echo '{"string":"string","number":42,"null":null,"boolean":false,"array":["bar","baz"]}' | jlc
```

```shell
kubectl logs -n my-namespace --follow my-pod | jlc
```
