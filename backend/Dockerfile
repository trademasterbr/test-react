FROM scratch

# Copy our static executable.
COPY main /
COPY ca-certificates.crt /etc/ssl/certs/ca-certificates.crt

EXPOSE 8000
# Run the hello binary.
CMD ["/main"]