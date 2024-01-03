package main

import (
	"bytes"
	"fmt"
	"os/exec"
	"time"

	"golang.org/x/net/html"
)

func main() {
	fmt.Printf("\n====================== sadInspector ======================\n")

	var url string
	fmt.Printf("Enter target URL: ")
	fmt.Scan(&url)

	fmt.Println("====================== ============ ======================")

	source_code, err := curlTarget(url)
	if err != nil {
		fmt.Println("Error: ", err)
		return
	}

	fmt.Println("[+] Source code fetching completed.")

	// Extract and print links
	links, err := extractLinks(source_code)
	if err != nil {
		fmt.Println("Error extracting links:", err)
		return
	}

	fmt.Println("\n=============== Extracted Links ==============")
	for _, link := range links {
		fmt.Println(link)
	}
	// fmt.Println(string(source_code))
}

func curlTarget(url string) ([]byte, error) {

	var cmd = exec.Command("curl", "-s", url)
	var outBuffer bytes.Buffer
	cmd.Stdout = &outBuffer

	go beginAnimate()
	err := cmd.Run()
	if err != nil {
		return nil, err
	}
	stopAnimation()

	return outBuffer.Bytes(), err
}

func beginAnimate() {
	fmt.Print("Fetching source code")
	for {
		select {
		case <-time.After(500 * time.Millisecond):
			fmt.Print(".")
		}
	}
}

func stopAnimation() {
	fmt.Println("\nFetch complete!")
}

func extractLinks(htmlContent []byte) ([]string, error) {
	var links []string

	doc, err := html.Parse(bytes.NewReader(htmlContent))
	if err != nil {
		return nil, err
	}

	var extract func(*html.Node)
	extract = func(n *html.Node) {
		if n.Type == html.ElementNode && n.Data == "a" {
			for _, attr := range n.Attr {
				if attr.Key == "href" {
					links = append(links, attr.Val)
				}
			}
		}
		for c := n.FirstChild; c != nil; c = c.NextSibling {
			extract(c)
		}
	}

	extract(doc)
	return links, nil
}
