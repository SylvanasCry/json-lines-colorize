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
  - `-o, --override <property>,<value>,<hex-color>` - replaces property name and string literal
    colors with given `hex-color` if object has `property` with `value` 

## Example

```shell
echo '{"foo":"bar"}' | jlc
```

```shell
kubectl logs -n my-namespace --follow my-pod | jlc
```

```shell
echo '{"level":"error","message":"error"}\n{"level":"log","message":"ok"}' | \
jlc -o level,error,ff0000
```

```shell
echo '{"a":"b"}\n{"c":"d"}' | jlc -o a,b,ff0000 -o c,d,\#00FF00
```
