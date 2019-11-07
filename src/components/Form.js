/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui"
import { Label, Input, Select, Textarea } from "@theme-ui/components"

const Form = () => {
  return (
    <Box>
      <fieldset sx={{ border: "none", mx: 0, px: 0 }}>
        <legend sx={{ variant: "styles.h2" }}>Get in Touch</legend>
        <form
          name="contact"
          action="/success/"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <Label htmlFor="name">Your Name: </Label>
          <Input id="name" name="name" placeholder="John Doe" />

          <Label sx={{ mt: 3 }} htmlFor="email">
            Your Email:{" "}
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="john@acme.com"
          />

          <Label sx={{ mt: 3 }} htmlFor="subject[]">
            Subject:{" "}
          </Label>

          <Select name="subject[]" id="subject" defaultValue="General Enquiry">
            <option>General Enquiry</option>
            <option>New Website</option>
            <option>Other Opportunity</option>
          </Select>

          <Label sx={{ mt: 3 }} htmlFor="message">
            Your Name:{" "}
          </Label>
          <Textarea name="message" />

          <Flex sx={{ pt: 4, justifyContent: "center", alignContent: "center"  }}>
            <button
              sx={{
                variant: "styles.hollow",
                backgroundColor: "colors.background"
              }}
              type="submit"
            >
              Send Message
            </button>
          </Flex>
        </form>
      </fieldset>
    </Box>
  )
}

export default Form
