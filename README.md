# json-lines-colorize

Colorizes the JSON-strings input stream (stdin).

<img src="https://i.imgur.com/TXpqcKo.png" alt="jlc" />


## Installation

```shell
npm install -g @sylvanas-cry/json-lines-colorize
```

## Usage

```shell
<output_stream> | jlc [options]
```

Where options is:
  - `-c, --comma` — add comma to the end of every JSON object
  - `-n, --no-pretty` — disable pretty-print of JSON objects
  - `-o, --override <property>,<value>,<hex-color>` — replaces property name and string literal
    colors with given `hex-color` if JSON object has `property` with `value` 

## Examples

```shell
echo '{"foo":"bar"}' | jlc
```

```shell
echo '{"level":"error","message":"error"}\n{"level":"log","message":"ok"}' | \
jlc -o level,error,ff0000
```

```shell
echo '{"a":"b"}\n{"c":"d"}' | jlc -o a,b,ff0000 -o c,d,\#00FF00
```

```shell
tail -f /var/log/my-service.log | jlc -n -c
```

```shell
kubectl logs -n my-namespace --follow my-pod | jlc
```

## License

The scripts and documentation in this project are released under the [MIT License](./LICENSE).
